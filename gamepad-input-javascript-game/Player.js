export class Player {
}
Player.getPlayerState = (gameInput, currentState) => {
    return {
        position: Player.updatePlayerPosition(currentState.position, currentState.direction),
        direction: {
            horizontal: gameInput.axis.discrete.x,
            vertical: gameInput.axis.discrete.y
        },
        bottom: gameInput.actions.primary === 'pressed',
        right: gameInput.actions.secondary === 'pressed',
        left: gameInput.actions.button3 === 'pressed',
        top: gameInput.actions.button4 === 'pressed',
    };
};
Player.updatePlayerPosition = (position, direction) => {
    const speed = 10;
    const x = position.x + direction.horizontal * speed;
    const y = position.y + direction.vertical * speed;
    return { x, y };
};
