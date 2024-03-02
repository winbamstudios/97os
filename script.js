const winbox = new WinBox({
  title: 'Test Window',
  width: '400px',
  height: '300px',
  mount: document.body,
  template: `
    <div class="winbox-titlebar">
      {{title}}
      <div class="winbox-controls">
        <button class="winbox-close">×</button>
      </div>
    </div>
    <div class="winbox-body">
      <button class="winbox-button">Click Me</button>
    </div>
  `,
  onClose: () => {
    // Handle window closing here
  }
});

// Optional: Handle button click
const button = winbox.el.querySelector('.winbox-button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
