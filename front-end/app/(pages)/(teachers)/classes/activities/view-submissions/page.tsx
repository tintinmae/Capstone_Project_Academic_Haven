"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ViewSubmissions from "@/components/viewSubmissions/ViewSubmissions";

interface Submission {
  studentName: string;
  content: string;
}

interface Props {
  submissions: Submission[];
}

const fetchSubmissions = async (assignmentId: string) => {
  // Replace with actual data fetching logic
  return [
    { studentName: "John Doe", content: "Completed the assignment." },
    { studentName: "Jane Smith", content: "Submitted a late assignment." },
  ];
};

const ViewSubmissionsPage: React.FC<Props> = ({ submissions }) => {
  const router = useRouter();
  const { assignmentId } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Assignment Submissions</h1>
      <ViewSubmissions
        submissions={submissions}
        onClose={() => router.back()} // Go back to the previous page
      />
    </div>
  );
};

export async function getServerSideProps(context: {
  query: { assignmentId: string };
}) {
  const { assignmentId } = context.query;
  const submissions = await fetchSubmissions(assignmentId as string);

  return {
    props: {
      submissions,
    },
  };
}

export default ViewSubmissionsPage;
