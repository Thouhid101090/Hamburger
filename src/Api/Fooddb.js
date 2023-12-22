const BASE_URL = 'http://localhost/hamburger';

export const Fooddb = async () => {
    try {
        const response = await fetch(`${BASE_URL}/menu.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching menus data: ${error.message}`);
    }
};
