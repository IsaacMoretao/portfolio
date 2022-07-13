import './Stylle.scss';

interface data {
  Name: string;
  text: string;
  br?: any;
  textDois?: string;
  margin: '150px' | '0';
}

export function Usados(props: data){
  return(
    <div
    style={{
      display: 'flex',
      marginTop: `${props.margin}`
      }} className='div-use'>
      <span>
        . <b>{props.Name}</b>&#123; <br /> <br />
        <p>
          {props.text} <br /> {props.br}
          {props.textDois}<br />
          
          
        </p>
          &#125;
      </span>
    </div>
  )
}

