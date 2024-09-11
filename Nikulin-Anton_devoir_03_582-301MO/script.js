document.addEventListener('DOMContentLoaded', () => {
    const scenes = document.querySelectorAll('.scene');

    function showScene(sceneId) {
        scenes.forEach(scene => scene.style.display = 'none');
        document.getElementById(sceneId).style.display = 'flex';
    }

    // Set up event listeners for navigation buttons
    document.getElementById('btn-commencer').addEventListener('click', () => showScene('scene-jeu'));
    document.getElementById('btn-credit').addEventListener('click', () => showScene('scene-credits'));
    document.getElementById('btn-comment-jouer').addEventListener('click', () => showScene('scene-comment-jouer'));
    document.getElementById('btn-audio').addEventListener('click', () => { /* Toggle audio */ });
    document.getElementById('btn-quit').addEventListener('click', () => showScene('scene-accueil'));
    document.getElementById('btn-retour-comment-jouer').addEventListener('click', () => showScene('scene-accueil'));
    document.getElementById('btn-retour-credits').addEventListener('click', () => showScene('scene-accueil'));
    document.getElementById('btn-recommencer').addEventListener('click', () => showScene('scene-jeu'));
    document.getElementById('btn-menu-principal').addEventListener('click', () => showScene('scene-accueil'));
    document.getElementById('btn-menu-principal-victoire').addEventListener('click', () => showScene('scene-accueil'));

    // New event listeners for Partie terminée and Victoire scenes
    document.getElementById('btn-partie-terminee').addEventListener('click', () => showScene('scene-partie-terminee'));
    document.getElementById('btn-victoire').addEventListener('click', () => showScene('scene-victoire'));

    // Show the accueil scene initially
    showScene('scene-accueil');
});
