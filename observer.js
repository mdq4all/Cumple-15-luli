const observerFunction = (element, animation) => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
            entry.target.classList.add(animation);
          }
        });
      });
      
      observer.observe(element);
}
export default observerFunction;