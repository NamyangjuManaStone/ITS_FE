import React from 'react'
import { CardContainer } from './styles'

const Card = ({ title, category, date, skills, comment, hits }) => (
	<CardContainer>
		<div className="list__join_pro">
			<div className="list__join_box">
				<p className='list__category'>{category}</p>
				<p className='list__title'>{title}</p>
				<p className='list__date'>{date}</p>
				<div className="list__skills">
					{skills.map(skill => (
						<div className="skill_box" key={skill.id}>
							<span>{skill.title}</span>
							<img src={skill.img} alt={skill.title} />
						</div>
					))}
				</div>
				<p className='list__comment'>
					댓글{comment} 조회수{hits}
				</p>
			</div>
		</div>
	</CardContainer>
)

export default Card
