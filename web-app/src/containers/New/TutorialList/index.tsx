import * as React from 'react'
import * as G from 'typings/graphql'

import TutorialItem from './TutorialItem'
import channel from '../../../services/channel'

interface Props {
	tutorialList: G.Tutorial[]
}

const TutorialList = (props: Props) => {
	const onSelect = (tutorial: G.Tutorial) => {
		channel.machineSend({
			type: 'TUTORIAL_START',
			payload: {
				tutorial,
			},
		})
	}
	return (
		<div>
			{props.tutorialList.map((tutorial: G.Tutorial) => (
				<TutorialItem
					key={tutorial.id}
					onSelect={() => onSelect(tutorial)}
					title={tutorial.version.summary.title || ''}
					description={tutorial.version.summary.description || ''}
				/>
			))}
		</div>
	)
}

export default TutorialList
