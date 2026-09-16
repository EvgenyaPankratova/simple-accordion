const accordionMainBlocks = document.querySelectorAll('.accordion__main_block_content');

const handlerOpen = (event) => {
  const currentBlock = event.currentTarget;
    
  currentBlock.classList.toggle('accordion__main_block_content_open');
  currentBlock.querySelector('img')?.classList.toggle('accordion__main_block_content_icon_open');
}

accordionMainBlocks.forEach(elem => elem.addEventListener("click", handlerOpen));

