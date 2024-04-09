import './css/main.css'


const item = {
  brand: 'Богема',
  title: 'Ванна Богема Sofix 1500х700',
  description: 'Ванна из литьевого мрамора',
  descriptionFull: 'Ванна из литьевого мрамора, только у Нас купить от производителя по низкой цене, доставка по Костроме бесплатна, в друггие регионны РФ отправляем ТК по вашему выбору.',
  price: 43700,
  currency: 'Руб'
}

const ShopItemFunc = ({ item }) => ( 
  <div className="main-content">
  <h2>{ item.brand }</h2>
  <h1>{ item.title }</h1>
  <h3>{ item.description }</h3>
  <div className="description">{ item.descriptionFull }</div>
  <div className="highlight-window mobile">
    <div className="highlight-overlay"></div>
  </div>
  <div className="divider"></div>
  <div className="purchase-info">
    <div className="price">{ item.currency+item.price.toFixed(2) }</div>
    <a href="https://bathroomstore.ru/product/%d0%b2%d0%b0%d0%bd%d0%bd%d0%b0-sofix-1500x700/" className="button">Добавить в корзину</a>
  </div>
</div>
)

export default function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
  );
}
