

function signup() {
  const [nomeInput, emailInput, senhaInput] = document.querySelectorAll("input");
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const senha = senhaInput.value;

  // Verifica se todos os campos estão preenchidos
  if (!nome || !email || !senha) {
    showToast("Por favor, preencha todos os campos!");
    return;
  }

  // Validação de e-mail simples
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("Informe um e-mail válido!");
    return;
  }

  // Validação de senha: mínimo 8 caracteres, ao menos uma letra e um número
  const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!senhaRegex.test(senha)) {
    showToast("A senha deve ter no mínimo 8 caracteres e conter letras e números.");
    return;
  }

  showToast("Conta criada com sucesso!");
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}

function resetPassword() {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = "Link de recuperação enviado para seu e-mail!";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}

// Exemplo: ações futuras como clicar em favoritos ou adicionar ao carrinho
document.querySelectorAll('.fa-heart').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Adicionado aos favoritos!');
  });
});

document.querySelectorAll('.fa-plus').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Adicionado ao carrinho!');
  });
});
