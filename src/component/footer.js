import React from 'react';

function Footer() {
  return (
    <div className='bg-[#035dd3] py-6 px-4'>
      <div className='text-white'>
        <span className='text-2xl font-semibold'>ติดต่อเรา</span>
        <div className='mt-4 space-y-2'>
          <div className='text-sm'>
            <span className='block'>ฝ่ายสื่อสารองค์กร</span>
            <span className='block'>บริษัท สามารถคอร์ปอเรชั่นจำกัด (มหาชน)</span>
            <span className='block'>99/1 หมู่ 4 ชั้นลอย อาคารซอฟต์แวร์ปารค์ ถนนแจ้งวัฒนะ ตำบลคลองเกลือ</span>
            <span className='block'>อำเภอปากเกร็ด จังหวัดนนทบุรี 11120</span>
          </div>
          <div className='text-sm'>
            <span className='block'>T +66 2502 6000</span>
            <span className='block'>F +66 2502 6707</span>
            <a href='https://www.facebook.com/SamartCompany/' target='_blank' rel='noopener noreferrer' className='block text-white hover:opacity-75 transition-opacity duration-300'>
              <i className='fab fa-facebook-square mr-2 text-2xl'></i>SAMART COMPANY
            </a>
            <a href='https://www.facebook.com/SamartInnovationAwards/' target='_blank' rel='noopener noreferrer' className='block text-white hover:opacity-75 transition-opacity duration-300'>
              <i className='fab fa-facebook-square mr-2 text-2xl'></i>SAMART INNOVATION AWARDS
            </a>
            <a href='https://www.youtube.com/channel/UCLHY9V4zZSxQe5csyPCJCpw' target='_blank' rel='noopener noreferrer' className='block text-white hover:opacity-75 transition-opacity duration-300'>
              <i className='fab fa-youtube mr-2 text-2xl'></i>SAMART
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
