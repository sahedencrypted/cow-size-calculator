document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const weightResult = document.getElementById('weight-result');
  const costResult = document.getElementById('cost-result');
  const unitSelect = document.getElementById('unit');
  const girthLabel = document.getElementById('one-top');
  const lengthLabel = document.getElementById('two-top');
  const McostResult = document.getElementById('m-result')

let unit ='inches';
  unitSelect.addEventListener('change', () => {
    unit = unitSelect.value;
    girthLabel.textContent = `Heart Girth (${unit})`;
    lengthLabel.textContent = `Body Length (${unit})`;
    resultCal()
  });
  function resultCal(){
    
  }
let weight;
  form.addEventListener('input', () => {
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const girth = parseFloat(values.girth) || 0;
    const length = parseFloat(values.length) || 0;
    const pricePerKg = parseFloat(values.price) || 0;

    if (girth > 0 && length > 0) {
      if(unit == 'cm'){
        weight = ((girth*0.393701) * (girth*0.393701) * (length*0.393701)) / 660;
        weightResult.textContent = `${weight.toFixed(2)} kg`;
      }
      else if(unit == 'inches'){
        weight = (girth * girth * length) / 660;
        weightResult.textContent = `${weight.toFixed(2)} kg`;
        McostResult.textContent = `${Math.floor(weight*0.48)} kg`;
      }
      else if(unit == 'Foot'){
        weight = ((girth*12) * (girth*12) * (length*12)) / 660;
        weightResult.textContent = `${weight.toFixed(2)} kg`;
        
  
      }

      if (pricePerKg > 0) {
        const cost = weight * pricePerKg;
        costResult.textContent = `${Math.floor(cost)} Tk`;
      } else {
        costResult.textContent = '';
      }
      
      if (pricePerKg > 0) {
        const cost = weight * pricePerKg;
        costResult.textContent = `${Math.floor(cost)} Tk`;
        
      } else {
        costResult.textContent = '';
      }
    } else {
      weightResult.textContent = '';
      costResult.textContent = '';
    }
  });
});
