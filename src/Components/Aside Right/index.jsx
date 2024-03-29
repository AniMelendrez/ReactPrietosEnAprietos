export const AsideRight = (props) => {
  const { postsOpenSourceTitles, postsOpenSourceComments } = props;

  return (
    <div>
      <div className="bg-white p-4 border border-slate-300 rounded-lg">
        <h1 className="font-bold text-2xl hover:underline hover:text-blue-700">
          #wecoded
        </h1>
        <p className="text-stone-600 text-lg">
          we_coded is a celebration of individuals who are underrepresented and
          otherwise marginalized in software development on the basis of gender:
          including women, transgender, nonbinary, gender non-conforming, and
          two spirit people.
        </p>
        <hr />
        <p className="text-normal ">{postsOpenSourceTitles[0]}</p>
        <p className="text-sm text-stone-600">
          {postsOpenSourceComments[0]} comments
        </p>
        <hr />
        <p className="text-normal ">{postsOpenSourceTitles[1]}</p>
        <p className="text-sm text-stone-600">
          {postsOpenSourceComments[1]} comments
        </p>
        <hr />
        <p className="text-normal ">{postsOpenSourceTitles[2]}</p>
        <p className="text-sm text-stone-600">
          {postsOpenSourceComments[2]} comments
        </p>
        <hr />
      </div>
      <p className="font-bold my-2">trending guides/resources</p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">
        Advanced End-to-End DevOps Project: Deploying A Microservices APP To AWS
        EKS using Terraform, Helm, Jenkins And ArgoCD (Part I)
      </p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">
        Cloud-Native Is In Shambles
      </p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">
        Skills to become a backend developer in 6 months (roadmap)
      </p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">
        Git Good: Best Practices for Branch Naming and Commit Messages
      </p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">
        Understanding event driven architecture
      </p>
      <hr className="border border-stone-300" />
      <p className="font-bold my-2">recently queried</p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">
        Spotify Shuffle Sucks
      </p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">Haiku Checker</p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">Vscode Vim</p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">&Nbsp Meaning</p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">Atom Text Editor</p>
      <p className="bg-gray-200 p-2 hover:bg-white my-1">
        Slack Screen Sharing
      </p>
    </div>
  );
};
