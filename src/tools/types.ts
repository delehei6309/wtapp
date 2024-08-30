/**
 * @fileoverview 项目中所用到的一些类型定义
 */

// 文件的存储类型 { file_name: string; unique_file_name: string; bucket_name: string; file_type: string, file_url?: string }
export interface FileProps {
  file_name?: string;
  unique_file_name: string;
  bucket_name?: string;
  file_type?: string;
  file_url?: string;
}