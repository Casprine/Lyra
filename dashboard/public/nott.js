

new Toast({
    message: 'Remember to create data models before heading to the dashboard for inputs',
    type: 'success',
    customButtons: [
        {
            text: 'Create Data models',
            onClick: function () {
                window.open('/config');
            }
        }
    ]
});
