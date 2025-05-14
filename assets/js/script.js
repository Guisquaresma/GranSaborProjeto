function login() {
  alert("Tentando conectar...");
}

function signup() {
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    if (!input.value.trim()) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
  }
  alert("Conta criada com sucesso!");
}
