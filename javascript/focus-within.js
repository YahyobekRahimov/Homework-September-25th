  const containers = document.querySelectorAll('.search-space');

  // Add click event listeners to each container
  containers.forEach(container => {
    container.addEventListener('click', () => {
      // Check if the container contains an input element
      const input = container.querySelector('input');

      if (input) {
        // Focus the input element
        input.focus();
      }
    });
  });
