// https://nx.dev/recipes/angular/using-tailwind-css-with-angular-projects

module.exports = {
  theme: {
    extend: {
      backgroundPosition: {
        'right-center': 'right 10px center',
      },
      colors: {
        'tw-blue': '#347CCB',
        'tw-blue-darker': '#2a63a2',
        'tw-blue-lighter': '#c2d8ef',
        'tw-black': '#0b0b0d',
        'tw-gray': '#2E3D54',
        'tw-blue-2': '#2D7BD0',
      },
      gridTemplateColumns: {
        equal: 'repeat(auto-fit,minmax(0, 1fr))',
      },
      boxShadow: {
        'tw': '0px 4px 10px #00000014',
        'tw-subtle': 'rgba(0, 0, 0, 0.05) 0px 4px 5px',
        'tw-input-focus': '0 0 2px 0.25rem #c2d8ef',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        rubberband: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, .95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },        
        showOff: {
          '0%,100%': { transform: 'translateY(0) translateX(0) scale(1) rotate(-10deg)' },
          '50%': { transform: 'translateY(10px) translateX(10px) scale(1.5) rotate(10deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        rubberband: 'rubberband 1s ease-in-out infinite',
        wiggleOnce: 'wiggle ease-in-out',
        showOff: 'showOff 1s ease-out',
      },
    },
  },
  plugins: [],
};
