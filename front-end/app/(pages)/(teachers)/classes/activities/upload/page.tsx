import Form from "@/components/activities/Form";
import SelectComponent from "@/components/activities/Select";
import UploadActivities from "@/components/activities/UploadActivities";
import Layout from "@/components/layout/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const UploadPage = () => {
  return (
    <Layout>
      <div>
        <div className="self-start mb-4 mt-6 md:mt-0">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/classes">Classes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/classes/activities">
                  Activities
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/classes/activities/upload">
                  Uploads
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Form />
      </div>
    </Layout>
  );
};

export default UploadPage;
