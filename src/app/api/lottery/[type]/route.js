import { NextRequest, NextResponse } from 'next/server'
const apiBaseURL = 'https://testing-luckito-backend.rnssol.com/api/luckito/lottery';
export async function GET(request ,{ params }) {

  try {
    
    const lotteryType = params.type
    console.log(lotteryType)
    const url = apiBaseURL+`/get-lottery?lotteryType=${lotteryType}`
    console.log(url)
    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await res.json()
    return NextResponse.json({result})
  } catch (error) {
    console.error('Error fetching products:', error);
      return NextResponse.json({});
  }
 
}