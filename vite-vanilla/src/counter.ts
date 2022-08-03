export function setupCounter(element: HTMLButtonElement) {
    element.innerHTML = `
        <div id="counter"></div>
        <button id="btn" type="button">按钮</button>
      `;

    let counter = 0;
    const setCounter = (count: number) => {
        counter = count;
        element.querySelector<HTMLDivElement>("#counter")!.innerHTML = `count is ${counter}`;
    };
    element.querySelector<HTMLButtonElement>("#btn")!.addEventListener("click", () => setCounter(++counter));
    setCounter(0);
}
