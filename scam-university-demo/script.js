const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const logBody = document.querySelector("#log-body");
const exportLog = document.querySelector("#export-log");
const clearLog = document.querySelector("#clear-log");

const demoUsername = "student.demo";
const demoPassword = "training-only";
const storageKey = "scam-university-training-log";

function showMessage(text) {
  message.textContent = text;
  message.classList.add("show");
}

function getLog() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveLog(entries) {
  localStorage.setItem(storageKey, JSON.stringify(entries.slice(-50)));
}

function cleanUsername(value) {
  if (!value) {
    return "(blank)";
  }

  return value.replace(/[^\w.@-]/g, "").slice(0, 40) || "(redacted)";
}

function recordAttempt(enteredUsername, result) {
  const entries = getLog();
  entries.push({
    time: new Date().toLocaleString(),
    username: cleanUsername(enteredUsername),
    result
  });
  saveLog(entries);
  renderLog();
}

function renderLog() {
  const entries = getLog().slice().reverse();

  if (!entries.length) {
    logBody.innerHTML = '<tr><td colspan="3">No training attempts yet.</td></tr>';
    return;
  }

  logBody.innerHTML = entries.map((entry) => `
    <tr>
      <td>${entry.time}</td>
      <td>${entry.username}</td>
      <td>${entry.result}</td>
    </tr>
  `).join("");
}

function downloadCsv() {
  const rows = getLog();
  const csv = [
    ["Time", "Username", "Result"],
    ...rows.map((entry) => [entry.time, entry.username, entry.result])
  ].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "scam-university-training-log.csv";
  link.click();
  URL.revokeObjectURL(url);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredUsername = username.value.trim();
  const enteredPassword = password.value;

  if (!enteredUsername || !enteredPassword) {
    recordAttempt(enteredUsername, "blocked-empty-field");
    showMessage("Enter the dummy training account only. This demo does not accept real credentials.");
    return;
  }

  if (enteredUsername === demoUsername && enteredPassword === demoPassword) {
    recordAttempt(enteredUsername, "demo-login-accepted");
    showMessage("Demo login accepted. Training point: a page can look familiar while still being unrelated to the real service.");
    form.reset();
    return;
  }

  recordAttempt(enteredUsername, "blocked-non-demo-input");
  showMessage("Blocked for safety. Never type real school, work, or banking credentials into a practice page.");
  password.value = "";
});

exportLog.addEventListener("click", downloadCsv);

clearLog.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderLog();
});

renderLog();
