import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { supabase } from "../../../shared/services/api/supabase";
import { ResumesFilterType } from "../types/ResumesFilterType";
import { ResumesListItem } from "../types/ResumesListType";
import { ResumesSortingType } from "../types/ResumesSortingType";

interface GetResumesProps {
  filters: ResumesFilterType[];
  sortArr: ResumesSortingType[];
  page: number;
}

export const getResumes = async ({ filters, sortArr, page }: GetResumesProps) => {
  let query = supabase.from("resumes").select("*,users(*)", { count: "exact" });

  if (filters.length > 0) {
    filters.forEach((filter) => {
      const { column, operator, value } = filter;
      if (value) {
        query = query.filter(
          column,
          operator,
          Array.isArray(value) ? `{${value.join(",")}}` : value,
        );
      }
    });
  }

  if (sortArr.length > 0) {
    sortArr.forEach((sort) => {
      const { column, direction } = sort;
      query = query.order(column, { ascending: direction === "asc" });
    });
  }

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  return { data, totalCount: count };
};

export const createEditResume = async (newResume: ResumesListItem) => {
  let query: any = supabase.from("resumes");

  if (!newResume.id) {
    query = query.insert([newResume]);
  }
  if (newResume.id) {
    query = query.update(newResume).eq("id", newResume.id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Ошибка при создании резюме");
  }

  return data;
};

export const deleteResume = async (id: number) => {
  const { data, error } = await supabase.from("resumes").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления резюме");
  }
  return data;
};
