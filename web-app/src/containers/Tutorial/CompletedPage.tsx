import * as React from 'react'
import { Button } from '@alifd/next'
import * as CR from 'typings'

const styles = {
  options: {
    padding: '0rem 1rem',
  },
}

interface Props {
	context: CR.MachineContext
	send(action: CR.Action|string): void
}

const CompletedPage = (props: Props) => {
	const selectNewTutorial = () => {
		props.send('SELECT_TUTORIAL')
	}
  return (
		<div>
			<h3>Tutorial Complete</h3>
			<div style={styles.options}>
				<Button onClick={selectNewTutorial}>Continue</Button>
			</div>
		</div>
	)
}

export default CompletedPage