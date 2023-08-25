export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)

  }

  //load(){
  //}

}

export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    console.log(this.root)

    this.update()
  }

  update(){
    this.removeAllTr()

    const entries = [
      {
        login: 'LucasFCdev',
        name: 'Lucas Ferraz',
        public_repos: '500',
        followers: '8867'
      },

      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '500',
        followers: '8867'
      },
    ]
    
    entries.forEach( user => {
      console.log(user)
      }
    )  
  
  }

  creatRow(){
    const tr = document.createElement('tr')

    const content = `
      <td class="user">
        <img src="/assets/Ellipse 3.png" alt="">
        <a href="">
          <span>Username</span>
          <p>Name</p>
        </a>
      </div> 

      <td class="repositories">158</td>

      <td class="followers">136</td>

      <td class="action">Remover</td>
    `
    tr.innerHTML = content  
    
    return tr
  }

  removeAllTr(){
    const tbody =  this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove()
      });
  }

}