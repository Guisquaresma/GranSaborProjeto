// Função para exibir mensagem no topo (toast)
function showToast(message, isSuccess = false) {
  const existingToast = document.querySelector(".toast-message");
  if (existingToast) {
    existingToast.remove(); // Remove a anterior se ainda estiver na tela
  }

  const toast = document.createElement("div");
  toast.className = `toast-message ${isSuccess ? "success" : "error"}`;
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100); // Dá tempo de inserir no DOM

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300); // Espera a animação sair
  }, 2500);
}

// Função de login
function login() {
  const email = document.querySelector('input[type="email"]').value.trim();
  const senha = document.querySelector('input[type="password"]').value.trim();

  if (!email || !senha) {
    showToast("Por favor, preencha todos os campos!");
    return;
  }

  if (email === "guilherme@gmail.com" && senha === "12345678") {
    showToast("Login realizado com sucesso!", true);
    setTimeout(() => {
      window.location.href = "inicio.html";
    }, 1500);
  } else {
    showToast("E-mail ou senha incorretos!");
  }
}
