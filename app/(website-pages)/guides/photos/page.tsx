"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function PhotoSharing() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) redirect("/guides");

  const DropboxLink = () => (
    <p className="text-center text-xl font-semibold">
      <a
        href="https://www.dropbox.com/sh/pqsisjvin2u3dmj/AABO91r0jDEJajC_IUFQNL1Ma?dl=0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 underline"
      >
        Click here to access the photos
      </a>
    </p>
  );

  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <h3 className="text-2xl font-display">Photo-Sharing System</h3>
      <p className="text-red-600">
        Please treat the information on this page as confidential within the
        Association.
      </p>

      <div className="flex justify-center py-6">
        <Image
          src="/photosharing.jpg"
          alt="Photo sharing screenshot"
          width={600}
          height={400}
          className="rounded"
        />
      </div>

      <p>
        Our photo-sharing system provides a way for guides to obtain interesting
        images of old Edinburgh, as well as sharing more modern photos that
        might be of interest.
      </p>
      <p>
        Thanks to Eric Melvin for organising a collection of historical images
        to start the system going. Most of these pictures are from Edinburgh's
        Capital Collection.
      </p>

      <h4 className="text-xl font-bold mt-4">What is the system for?</h4>
      <p>
        Many guides use historical pictures of the Old Town to help illustrate
        their tours. Our photo-sharing system provides an easy way for you to
        obtain suitable images, and also to share your own pictures with other
        guides. You can print the pictures to take with you on your tours, or
        transfer them to an iPad or similar device.
      </p>
      <p>
        The system can also be used to share other images such as photos of our
        tours or social events.
      </p>

      <h4 className="text-xl font-bold mt-4">How to access it</h4>
      <p>
        To access the system, click on the link below. The system is free and
        open to all. You don't need to register in any way or install any
        special software.
      </p>

      <p>Please note the following points:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          When you click the link, you will be taken to the EFVGA Dropbox
          folder. You don't need a Dropbox account to view or download the
          images in this folder.
        </li>
        <li>
          The folder contains various sub-folders. At present there are
          sub-folders for the Old Town and New Town respectively. The
          sub-folders in turn contain the actual images.
        </li>
        <li>
          When you have found an image of interest, you can download it to your
          computer. To do so, click the Download button (usually in the
          top-right corner of the screen). Alternatively, on a Windows computer,
          right-click on the image and select "Save Image As".
        </li>
        <li>
          If you have a Dropbox account, you will also be able to add a comment
          to an image, and you will be able to copy the image to your own
          Dropbox folder.
        </li>
      </ul>

      {DropboxLink()}

      <h4 className="text-xl font-bold mt-4">Sharing your own pictures</h4>
      <p>
        We encourage you to share any pictures that might be of interest to
        other guides. These might be images of old Edinburgh, or modern pictures
        such as photos of our tours or social events.
      </p>
      <p>
        To share your images, please email{" "}
        <Link
          href="mailto:webmaster@edinburghfestivalguides.org"
          className="text-orange-700 underline"
        >
          webmaster@edinburghfestivalguides.org
        </Link>{" "}
        to be given permission to upload to the Dropbox folder.{" "}
        <strong>Do not email the actual images.</strong> If appropriate, we can
        set up a new sub-folder for your images.
      </p>
      <p>When uploading your images, please note the following points:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Be respectful of copyright. There is no problem in sharing historical
          pictures, as these will normally be out of copyright. But in the case
          of recent photos, you should get permission from the copyright-holder
          (normally the person who took the photo or the publication where it
          first appeared).
        </li>
        <li>
          Do not use the system for anything that might be in any way
          confidential, sensitive or offensive. Although only EFVGA members are
          likely to see the images, the folder can be accessed by anyone who
          knows the link.
        </li>
        <li>
          As far as possible, please give your image files a meaningful title,
          so that others will know what they are.
        </li>
      </ul>

      {DropboxLink()}
      <p>
        If you have any problems, please contact the webmaster at the above
        email address.
      </p>
    </section>
  );
}
