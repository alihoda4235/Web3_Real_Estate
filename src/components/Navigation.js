import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {
<<<<<<< HEAD
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }
=======
>>>>>>> aliswork

}

export default Navigation;
