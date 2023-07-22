import React from 'react';
import arrow from "../images/page26/arrow.svg"
import upi from "../images/page26/UPI.svg"
import creditCard from "../images/page26/credit-card.svg"
import wallet from "../images/page26/wallet.svg"
import netBanking from "../images/page26/net-banking.svg"
import coupon from "../images/page26/coupons.svg"
import tick from "../images/page26/tick.svg"
import person from "../images/page26/person.svg"
import hdfc from "../images/page26/hdfc.png"
import PaymentMethods from '../Components/PaymentMethodContainer';
import OrderBreakdown from '../Components/OrderBreakdown';



const Page26 = () => {
  return (
    <div className='flex h-[920px] justify-center items-center flex-wrap'>
      <div className='flex'>
        <div className='image'>
          <img src={arrow}/>
        </div>

        <div className='left Pay-Meth mx-10 w-[540px] mr-32'>
          <h1 className='text-start font-semibold text-2xl -my-1 font-poppins'>Payment Methods</h1>
          <p className='font-poppins mt-10 text-gray-600 text-xs'>Ut non tempor sit facilisi pretium enim eu pharetra, netus elementum massa malesuada cursus sit in urna blandit viverra at vel, massa dignissim nam et</p>
          <div className='radio-btns'>
            <div className="radio flex items-center">
              <input id='upi' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={upi} alt="upi" />
              <label className='text-xl text-blue-950'>UPI Payment</label>
            </div>        
            <div className="radio flex items-center">
              <input id='credit-debit' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={creditCard} alt="Credit / Debit Card" />
              <label className='text-xl text-blue-950'>Credit / Debit Card</label>
            </div>        
            <div className="radio flex items-center">
              <input id='net-banking' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={netBanking} alt="net-banking" />
              <label className='text-xl text-blue-950'>Net Banking</label>
            </div>        
            <div className="radio flex items-center">
              <input id='wallet' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={wallet} alt="wallet" />
              <label className='text-xl text-blue-950'>Wallet</label>
            </div>        
          </div>
        </div>

        <div className='mt-10 v-line w-[3px] h-[484.037px] bg-light-grey'></div>

        <div className='right order-Breakdown mx-10 my-auto w-80'>
          <h1 className='text-center font-medium text-2xl my-4 font-poppins'>Order Breakdown</h1>
          <div className='flex my-3'>
            <img src={coupon} className='mx-2' alt="coupons" />
            <span className='font-poppins text-base text-blue-950'>Apply Coupon</span>
            <a className='font-poppins text-xs text-blue-950 self-center ml-20 font-medium' href="#">View Coupons</a>
          </div>
          <div className='flex border border-gray-950 rounded-md my-2 py-2'>
            <input type="text" className='font-poppins text-center text-sm outline-none pr-14' placeholder='Enter 6 digit code'/>
            <button className='font-poppins bg-[#215D4F] text-white px-3 py-1 rounded-md'>Verify</button>
          </div>
          <div className='border border-gray-950 rounded-md my-4 py-2'>
            <p className='font-poppins font-bold text-xs mx-3'>15% OFF on First Order </p>
            <p className='font-poppins text-gray-600 text-[9.541px] mx-3'>valid on orders items worth Rs 999</p>
            <hr className='mx-2 my-1 mb-2'/>
            
            <div className='flex justify-between items-center mx-3 my-2'>
              <div className='text-xs border bg-gray-300 p-1 rounded-lg border-green-800 border-1 tracking-[5.168px]'>
              PSAZADI15
              </div>
              <a href="#" className='font-poppins text-xs text-cyan-500 uppercase'>
                Apply
              </a>
            </div>
          </div>

          <div className='border border-gray-950 rounded-md my-4 py-2 bg-[#E8F7FF]'>
            <img className='mx-3' src={hdfc} alt="bank coupons" />
            <p className='font-poppins font-bold text-xs mx-3'>10% OFF using HDFC Bank Credit /Debit Card </p>
            <p className='font-poppins text-gray-600 text-[9.541px] mx-3'>valid on orders items worth Rs 999</p>
            <hr className='mx-2 my-1 mb-2'/>
            
            <div className='flex justify-between items-center mx-3 my-2'>
              <div className='text-xs border bg-gray-300 p-1 rounded-lg border-green-800 border-1 tracking-[5.168px]'>
              HDFC10
              </div>
              <a href="#" className='font-poppins text-xs text-[#CB8461] flex'>
                Applied
                <img className='mx-2' src={tick} alt="applied" />
              </a>
            </div>
          </div>

          <div className='mx-3'>
            <div className='total flex justify-between'>
              <p className='uppercase font-poppins text-[#054871] text-base'>Total</p>
              <p className='font-poppins text-[#054871] text-base'><span>₹</span>613.2</p>
            </div>
            <p className='font-poppins text-xs text-[#CB8461]'>Your Savings: Rs. 250 (-20%)</p>
          </div>
          <hr className='mx-4 my-3 mb-2'/>
          <div className='flex justify-center items-center my-3'>
            <button className='font-poppins bg-[#215D4F] text-white mx-3 py-2 rounded-md w-full'>Make Payment</button>
          </div>

          <div className='text-center mt-40 flex flex-col'>
            <a href='#' className='font-poppins text-xs text-[#CB8461]'>Facing Problems?</a>
            <a href='#' className='font-poppins text-base text-blue-950'>Contact Us</a>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0'>
        <img className='w-[1100px]' src={person} alt="person" />
      </div>
    </div>
  );
};

export default Page26;