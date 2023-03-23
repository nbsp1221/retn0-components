interface ExampleProps {
  content?: string;
}

export function Example(props: ExampleProps) {
  const { content = 'Hello, retn0-components!' } = props;

  return (
    <div className="text-xl font-bold text-blue-600">{content}</div>
  );
}
