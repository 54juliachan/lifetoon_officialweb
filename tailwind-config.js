tailwind.config = {
    theme: {
        extend: {
            colors: {
                manga: {
                    yellow: '#FFDF00',
                    black: '#0A0A0A',
                    white: '#FAFAFA',
                    gray: '#E5E5E5'
                }
            },
            fontFamily: {
                sans: ['"Noto Sans TC"', 'sans-serif'],
                display: ['Oswald', 'sans-serif'],
            },
            boxShadow: {
                'manga': '8px 8px 0px 0px rgba(10,10,10,1)',
                'manga-sm': '4px 4px 0px 0px rgba(10,10,10,1)',
                'manga-hover': '12px 12px 0px 0px rgba(10,10,10,1)',
            }
        }
    }
}