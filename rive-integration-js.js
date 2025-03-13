// Initialize Rive
document.addEventListener('DOMContentLoaded', () => {
    // Replace 'your-animation.riv' with the path to your Rive file
    const rivePath = './assets/your-animation.riv';
    
    // Get the canvas element
    const canvas = document.getElementById('rive-canvas');
    
    // Initialize a new Rive instance
    const r = new rive.Rive({
        src: rivePath,
        canvas: canvas,
        autoplay: true,
        layout: new rive.Layout({
            fit: 'contain',
            alignment: 'center'
        }),
        onLoad: () => {
            console.log('Rive animation loaded successfully!');
        },
        onError: (err) => {
            console.error('Error loading Rive animation:', err);
        }
    });
});
