function menu(option){
    if(option){
      document.getElementById('list').classList.replace('opacity-100', 'opacity-0')
      document.getElementById('close').classList.replace('opacity-0', 'opacity-100')
      document.getElementById('list').classList.replace('z-20', 'z-10')
      document.getElementById('close').classList.replace('z-10', 'z-20')
      document.getElementById('menu').classList.replace('max-h-0', 'max-h-[36rem]')
    }else{
      document.getElementById('close').classList.replace('opacity-100', 'opacity-0')
      document.getElementById('list').classList.replace('opacity-0', 'opacity-100')
      document.getElementById('close').classList.replace('z-20', 'z-10')
      document.getElementById('list').classList.replace('z-10', 'z-20')
      document.getElementById('menu').classList.replace('max-h-[36rem]', 'max-h-0')
    }
  }

  function productFilter(option){
    if(option){
      document.getElementById('filtery').classList.replace('opacity-0', 'opacity-100')
      document.getElementById('filtery').classList.remove('select-none')
      document.getElementById('filtery').classList.remove('pointer-events-none')
      document.getElementById('closeFilterIcon').classList.replace('opacity-0', 'opacity-100')
      document.getElementById('filterIcon').classList.replace('opacity-100', 'opacity-0')
      document.getElementById('closeFilterIcon').classList.replace('z-30', 'z-40')
      document.getElementById('filterIcon').classList.replace('z-40', 'z-30')
      document.getElementById('bgFilter').classList.replace('opacity-0', 'opacity-60')
      document.getElementById('bgFilter').classList.remove('select-none')
      document.getElementById('bgFilter').classList.remove('pointer-events-none')
    }else{
      document.getElementById('filtery').classList.replace('opacity-100', 'opacity-0')
      document.getElementById('filtery').classList.add('select-none')
      document.getElementById('filtery').classList.add('pointer-events-none')
      document.getElementById('closeFilterIcon').classList.replace('opacity-100', 'opacity-0')
      document.getElementById('filterIcon').classList.replace('opacity-0', 'opacity-100')
      document.getElementById('closeFilterIcon').classList.replace('z-40', 'z-30')
      document.getElementById('filterIcon').classList.replace('z-30', 'z-40')
      document.getElementById('bgFilter').classList.replace('opacity-60', 'opacity-0')
      document.getElementById('bgFilter').classList.add('select-none')
      document.getElementById('bgFilter').classList.add('pointer-events-none')
    }
  }

  function showProduct(product, option){
    if(option){
      document.getElementById(product).classList.replace('opacity-0', 'opacity-100')
      document.getElementById(product).classList.remove('pointer-events-none')
    }else{
      document.getElementById(product).classList.replace('opacity-100', 'opacity-0')
      document.getElementById(product).classList.add('pointer-events-none')
    }
  }