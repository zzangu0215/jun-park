import React from "react";

function ProjectCard() {
  return (
    <div className="lg:w-1/4 md:w-1/3 w-full lg:px-3 mt-6 m-4">
      <div className="bg-gray-200 rounded-xl relative text-white">
        <img
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsun%2F&tbnid=L8xfQakH9a8tJM&vet=12ahUKEwjXqLCKoObyAhWGtp4KHaQzBfkQMygAegUIARDKAQ..i&docid=T5n6IXZ5nFRelM&w=771&h=480&q=images&ved=2ahUKEwjXqLCKoObyAhWGtp4KHaQzBfkQMygAegUIARDKAQ"
          alt="img"
          className="object-cover h-96 w-full rounded-xl"
        />
        <div className="p-6 absolute bottom-0 left-0">
          <h2 className="text-2xl font-bold mb-2">Card Title</h2>
          <div className="leading-relaxed">Card body</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
