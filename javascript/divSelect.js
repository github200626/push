function showDiv(divId, button) {
    // Hide all divs
    const divs = document.querySelectorAll('.content');
    divs.forEach(div => div.classList.remove('active'));

    // Show the clicked div
    document.getElementById(divId).classList.add('active');

    // Remove active state from all icons
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => icon.classList.remove('icon-active'));

    // Add active state to the icon of the clicked button
    const icon = button.querySelector('i');
    icon.classList.add('icon-active');
}