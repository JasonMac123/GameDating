import { toast } from 'react-toastify';


export default function notify(name) {
  toast(`Congrats, you have matched with ${name}!  Why don't you go say hi to them?`)
}