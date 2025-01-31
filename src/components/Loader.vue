<template>
    <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style>
.lds-ring {
  /* change color here */
  color: #00c9ff
}
.lds-ring,
.lds-ring div {
    box-sizing: border-box;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 8px;
    border: 3px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s linear infinite;
    border-color: currentColor transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>