import React from 'react';
import { useState, useEffect } from 'react';
import { validThemes } from '../utilities/validThemes';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <select className="select select-primary" onChange={(e) => setTheme(e.target.value)}>
            {validThemes.map((theme) => <option key={theme} value={theme}>{theme[0].toUpperCase() + theme.slice(1)}</option>)}
        </select>
    );
}

export default ThemeSwitcher;