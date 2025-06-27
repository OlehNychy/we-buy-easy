
function nextStep(step) {
  document.getElementById('step' + step).classList.remove('active');
  if (step < 4) {
    document.getElementById('step' + (step + 1)).classList.add('active');
  } else {
    document.getElementById('block2').classList.add('active');
  }
}
function toggleText(n) {
  document.getElementById('t' + n).style.display = 'block';
}
function validateBlock2() {
  let valid = true;
  for (let i = 1; i <= 5; i++) {
    const val = document.getElementById('line' + i).value;
    if (!val.trim()) valid = false;
  }
  const err = document.getElementById('errorBlock');
  if (!valid) {
    err.style.display = 'block';
  } else {
    err.style.display = 'none';
    document.getElementById('block2').classList.remove('active');
    document.getElementById('block3').classList.add('active');
  }
}
function showModal() {
  const modal = document.getElementById('modalBox');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.display = 'none';
    document.getElementById('block3').classList.remove('active');
    document.getElementById('step1').classList.add('active');
  }, 2000);
}
