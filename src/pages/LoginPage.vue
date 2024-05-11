<template>
  <div class="login-page">
    <div class="modal-container">
      <div class="modal">
        <input type="text" class="input-field" placeholder="Email" />
        <input type="password" class="input-field" placeholder="Senha" />
        <button class="login-button">ENTRAR</button>
      </div>
      <div class="overlay-modal">
        <p class="login-text">LOGIN</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 50px;
  /* Adicionando margem superior para mover os elementos para baixo */
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  /* Adicionando margem superior para mover o botão para baixo */
}

.login-button:hover {
  background-color: #135ba1;
}

.login-text {
  font-size: 34px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 10px;
}

.login-page {
  background-image: url('./../assets/img/imagemLogin.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.modal {
  position: absolute;
  z-index: 1;
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay-modal {
  position: absolute;
  z-index: 5;
  width: 23%;
  height: 130px;
  background-color: #1976d2;
  border-radius: 10px;
  top: calc(50% - 190px);
  left: 50%;
  transform: translateX(-50%);
}

.login-text {
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  /* Utilizando a fonte Roboto */
  font-weight: bold;
  /* Deixa o texto em negrito */
  color: white;
  text-align: center;
  line-height: 130px;
}

@media screen and (max-width: 768px) {
  .overlay-modal {
    width: 80%;
    /* Ajustando a largura para 80% da largura do modal-container em dispositivos móveis */
    max-width: none;
    /* Removendo a largura máxima em dispositivos móveis */
  }
}
</style>
