export type NameProps = { name?: string };

const Name = ({ name = "상품명 기입" }: NameProps) => {
  return <span style={{ fontWeight: 600 }}>{name}</span>;
};

export default Name;
