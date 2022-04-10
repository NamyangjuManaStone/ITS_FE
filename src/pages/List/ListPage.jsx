import React from 'react'
import { MainContainer } from './styles'

const ListPage = () => 
    <MainContainer>
        <div className='list__filter'>
            <div className='list__filter_txt'>
                <p>검색 필터</p>
                <p className='list__filter_stxt'>| Filter</p>
            </div>
            <div className='list__filter_box'> 
                <div>
                    <select>
                        <option>지역</option>
                    </select>
                    <select>
                        <option>종류</option>
                    </select>
                    <select>
                        <option>언어</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option>최신순</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='list__join'>
            <div className='list__join_txt'>
                <p>총 100개의 팀</p>
                <p className='list__join_stxt'>관심있는 팀에 댓글을 남겨 팀에 참여해 보세요!</p>
            </div>
        </div>
    </MainContainer>



export default ListPage
