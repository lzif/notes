import Toast from "../components/common/Toast.svelte";

let toastContainer: HTMLElement;

function initializeToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }
}

export function createToast(id: string, message: string, duration?: number) {
  initializeToastContainer();

  const toast = new Toast({
    target: toastContainer,
    props: { id, message, duration },
  });

  toast.$on("close", (event) => {
    toast.$destroy(); // Hancurkan komponen toast saat event 'close' diterima
  });
}

export function deleteToast(id: string) {
  const toastElement = document.querySelector(`.toast[data-toast-id="${id}"]`);
  if (toastElement) {
    console.log(toastElement);
    toastElement.remove();
  }
}
