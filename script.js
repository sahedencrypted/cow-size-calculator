document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const weightResult = document.getElementById('weight-result');
  const costResult = document.getElementById('cost-result');
  const unitSelect = document.getElementById('unit');
  const girthLabel = document.getElementById('one-top');
  const lengthLabel = document.getElementById('two-top');
  const McostResult = document.getElementById('m-result');
  const Mperch = document.getElementById('m-perch');
  const costMeat = document.getElementById('cost-meat');


let weight;
let cost;
let unit ='inches';
  unitSelect.addEventListener('change', () => {
    unit = unitSelect.value;
    girthLabel.textContent = `Heart Girth (${unit})`;
    lengthLabel.textContent = `Body Length (${unit})`;
  });
  Mperch.addEventListener('change', () => {
    meatkg();
  });
  function meatkg(){
    const meatweight = Math.floor(weight*(Mperch.value/100));
    McostResult.textContent = `${meatweight} kg  ~  ${(meatweight/40).toFixed(2)} মণ`;
    const meattk = Math.floor(cost*(90/100));
    costMeat.textContent = `${Math.floor(meattk/meatweight)} TK per kg`;
  }


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
        meatkg();
        
      }
      else if(unit == 'Foot'){
        weight = ((girth*12) * (girth*12) * (length*12)) / 660;
        weightResult.textContent = `${weight.toFixed(2)} kg`;
        
  
      }

      if (pricePerKg > 0) {
        cost = Math.floor(weight * pricePerKg);
        costResult.textContent = `${cost} Tk`;
        meatkg();
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
