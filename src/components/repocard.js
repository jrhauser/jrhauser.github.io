export default function RepoCard(props) {
  return (
    <div class="shadow-lg bg-limed-spruce-200 text-limed-spruce-50 relative border-4 border-limed-spruce-900">
      <div className="text-xl bg-limed-spruce-600 p-3 no-underline hover:underline">
        <a href={props.url}>{props.name}</a>
      </div>
      <div className="p-4  place-self-center mb-8 text-limed-spruce-900">
        {props.description}
      </div>
      <div className="text-sm p-1 absolute bottom-0 bg-limed-spruce-600 container">
        <div className="text-left">{props.language}</div>
        <div className="inline float-right text-xs">{props.created}</div>
      </div>
    </div>
  );
}
