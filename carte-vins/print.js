document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',async()=>{await document.fonts.ready;window.print()}));
