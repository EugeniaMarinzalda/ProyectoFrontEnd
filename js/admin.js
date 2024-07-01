if(window.location.pathname === '/admin.html' && !sessionStorage.getItem('admin')){
    window.location.href = '/registro.html';
};