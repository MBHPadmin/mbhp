function redirect(language) {
    let url;
    switch(language) {
        case 'polish':
            url = 'https://brand.site/metalbusinesshubpolandpl'; // Wstaw tutaj prawidłowy link do polskiej strony
            break;
        case 'english':
            url = 'https://brand.site/metalbusinesshubpoland'; // Wstaw tutaj prawidłowy link do angielskiej strony
            break;
        case 'german':
            url = 'https://brand.site/metalbusinesshubpolandde'; // Wstaw tutaj prawidłowy link do niemieckiej strony
            break;
    }
    // Ustawia URL iframe i wyświetla go
    const iframe = document.getElementById('contentFrame');
    const selectionPanel = document.getElementById('selectionPanel');
    iframe.src = url;
    iframe.style.display = 'block'; // Pokazuje iframe
    selectionPanel.style.display = 'none'; // Ukrywa panel wyboru
}
