import"./assets/styles-01be1d95.js";import{i as s}from"./assets/vendor-651d7991.js";document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();const e=parseInt(document.querySelector('[name="delay"]').value,10),r=document.querySelector('[name="state"]:checked').value;i(e,r).then(()=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(()=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});function i(t,e){return new Promise((r,o)=>{setTimeout(()=>{e==="fulfilled"?r():o()},t)})}
//# sourceMappingURL=commonHelpers2.js.map