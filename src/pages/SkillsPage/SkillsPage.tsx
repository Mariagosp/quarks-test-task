type Props = {
  type: 'connection' | 'attraction';
}

export const SkillsPage: React.FC<Props> = ({ type }) => {
  return (
    <>
      <h1>{type === 'connection' ? 'connection' : 'attraction'}</h1>
    </>
  )
}