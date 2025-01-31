import { Controller, Post, Body, Headers } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly httpService: HttpService) {}

  @Post()
  async createEntity(
    @Body() body: { entityType: string },
    @Headers('X-Client-Id') clientId: string,
  ) {
    // Получаем Access Token и base_domain
    const tokenData = await this.getAccessToken(clientId);

    // Создаем сущность в amoCRM
    const entityId = await this.createEntityInAmoCRM(
      body.entityType,
      tokenData.access_token,
      tokenData.base_domain,
    );

    return { entityId };
  }

  private async getAccessToken(clientId: string) {
    const response = await firstValueFrom(
      this.httpService.get('https://app2.gnzs.ru/amocrm/test/oauth/get-token.php', {
        headers: {
          'X-Client-Id': clientId,
          'Content-Type': 'application/json',
        },
      }),
    );

    return response.data;
  }

  private async createEntityInAmoCRM(
    entityType: string,
    accessToken: string,
    baseDomain: string,
  ) {
    const url = `https://${baseDomain}/api/v4/${entityType.toLowerCase()}`;

    const response = await firstValueFrom(
      this.httpService.post(
        url,
        [{}], // Пустой объект, так как amoCRM требует массив
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      ),
    );

    return response.data._embedded[entityType.toLowerCase()][0].id;
  }
}