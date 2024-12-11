import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeCustomizerService {
    private isDarkTheme = new BehaviorSubject<boolean>(this.getStoredTheme());

    constructor() {}

    // Helper function to get stored theme or default to false
    private getStoredTheme(): boolean {
        const storedTheme = localStorage.getItem('isDarkTheme');
        return storedTheme ? JSON.parse(storedTheme) : false;
    }

    toggleTheme() {
        const newTheme = !this.isDarkTheme.value;
        this.isDarkTheme.next(newTheme); // Emit new theme state
        localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
    }

    isDark() {
        return this.isDarkTheme.value;
    }

    get isToggled$() {
        return this.isDarkTheme.asObservable();
    }
}
